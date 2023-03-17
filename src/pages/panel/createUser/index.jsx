import { Box, Grid, Stack, Button, Typography, Divider } from '@mui/material';
import { Person } from '@mui/icons-material';
import { useMutation } from 'react-query';
import { postGeneral } from 'service/general';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import Input from 'components/custom/input';
import { snackActions } from 'helper/toaster';
import { createUserResolver, createUserSchema } from 'schema/user/createUser';

function CreateUser(): React$Node {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: createUserResolver,
  });

  // اسنک اکشن مانند اسنک بار و ایزی توست برای مسیجها در قالب توستز

  const createUser = useMutation((command) => postGeneral.createUser(command), {
    onSuccess: (response) => {
      snackActions.success('عملیات با موفقیت انجام شد.');
      navigate('../userList');
    },
    onError: (error) => {
      snackActions.success('عملیات با خطا مواجه شد.');
    },
  });

  function onSubmit(data) {
    createUser.mutate(data);
  }

  return (
    <Box component={'section'}>
      <Grid container spacing={3} my={3} justifyContent={'center'}>
        <Grid item lg={4} xs={12}>
          <Stack spacing={4}>
            <Typography variant={'h4'}>{'ایجاد کاربر جدید'}</Typography>
            <Divider mb={10} />
            <Box
              component={'form'}
              noValidate
              autoComplete={'off'}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Stack spacing={4}>
                <Input
                  label={'نام'}
                  name={'firstName'}
                  schema={createUserSchema}
                  control={control}
                  errors={errors}
                  variant={'outlined'}
                  startIcon={<Person />}
                />
                <Input
                  label={'نام خانوادگی'}
                  name={'lastName'}
                  schema={createUserSchema}
                  control={control}
                  errors={errors}
                  variant={'outlined'}
                  startIcon={<Person />}
                />
                <Button
                  variant={'contained'}
                  color={'success'}
                  type={'submit'}
                  loading={createUser.isLoading ? true : undefined}
                >
                  {'ثبت'}
                </Button>
                <Button
                  variant={'contained'}
                  color={'warning'}
                  fullWidth
                  onClick={() => navigate('../userList')}
                >
                  {'بازگشت'}
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CreateUser;
