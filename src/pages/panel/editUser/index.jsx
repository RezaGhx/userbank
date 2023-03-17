import {
  Box,
  Grid,
  Stack,
  Button,
  Typography,
  Divider,
  Skeleton,
} from '@mui/material';
import { Person } from '@mui/icons-material';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router';
import { putGeneral, getGeneral } from 'service/general';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import Input from 'components/custom/input';
import { snackActions } from 'helper/toaster';
import { createUserResolver, createUserSchema } from 'schema/user/createUser';

function EditUser(): React$Node {
  const navigate = useNavigate();
  const { userId } = useParams();
  console.log(userId);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: createUserResolver,
  });

  const { isLoading: userDetailsLoading } = useQuery(
    'getUserDetails',
    () => getGeneral.userDetails(userId),
    {
      onSuccess: (response) => {
        console.log(response);
        reset({
          firstName: response?.body?.substring(0, 10),
          lastName: response?.title?.substring(0, 10),
        });
      },
    }
  );

  const editUser = useMutation((command) => putGeneral.editUser(userId, command), {
    onSuccess: (response) => {
      snackActions.success('عملیات با موفقیت انجام شد.');
      navigate('../userList');
    },
    onError: (error) => {
      snackActions.success('عملیات با خطا مواجه شد.');
    },
  });

  function onSubmit(data) {
    editUser.mutate(data);
  }

  return (
    <Box component={'section'}>
      <Grid container spacing={3} my={3} justifyContent={'center'}>
        {userDetailsLoading ? (
          <Skeleton variant={'rectangular'} animation={'wave'} width={700} height={500} />
        ) : (
          <Grid item lg={4} xs={12}>
            <Stack spacing={4}>
              <Typography variant={'h4'}>{'ویرایش اطلاعات کاربر'}</Typography>
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
                    loading={editUser.isLoading ? true : undefined}
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
        )}
      </Grid>
    </Box>
  );
}

export default EditUser;
