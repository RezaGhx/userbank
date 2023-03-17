import {
  Box,
  Grid,
  Button,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  Skeleton,
  Tooltip,
  IconButton,
  Alert,
  Input,
} from '@mui/material';
import { Add, ChevronLeft, Edit } from '@mui/icons-material';
import { NormalTableCell, NormalTableRow } from 'style/normalTable';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getGeneral } from 'service/general';
import { useNavigate } from 'react-router';

function UserList(): React$Node {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');

  const { isLoading } = useQuery('getUsers', () => getGeneral.users(), {
    onSuccess: (response) => {
      const list = response
        ?.filter((x) => x.userId === 1)
        .map((item) => ({
          title: item.title.substring(0, 10),
          id: item.id,
        }));
      setUsers(list.slice(0, 5));
    },
  });

  useEffect(() => {
    if (searchedValue?.length < 1) {
      setFilteredUsers(users);
      return;
    }
    const data = users?.filter((item) => item?.title?.includes(searchedValue));
    setFilteredUsers(data || []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedValue]);

  return (
    <Box component={'section'} py={4} mx={50}>
      <Grid
        container
        spacing={3}
        mt={1}
        mb={3}
        sx={{ justifyContent: 'flex-end' }}
      >
        <Grid
          item
          xs={12}
          lg={12}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button
            color={'warning'}
            fullWidth
            variant={'contained'}
            sx={{
              width: 200,
            }}
            endIcon={
              <ChevronLeft
                sx={{
                  mr: '1rem',
                }}
              />
            }
            onClick={() => navigate('../dashboard')}
          >
            {'بازگشت به داشبورد'}
          </Button>
          <Button
            color={'success'}
            fullWidth
            variant={'contained'}
            sx={{
              width: 200,
            }}
            endIcon={
              <Add
                sx={{
                  mr: '1rem',
                }}
              />
            }
            onClick={() => navigate('../createUser')}
          >
            {'اضافه کردن کاربر'}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Input
            onChange={(e) => setSearchedValue(e.target.value)}
            placeholder={'جستجو'}
            type={'text'}
            variant={'contained'}
            sx={{
              fontSize: '3rem',
            }}
          />
          {isLoading ? (
            <Skeleton variant={'rectangular'} animation={'wave'} height={500} />
          ) : (
            <>
              {users.length > 0 ? (
                <TableContainer
                  component={Paper}
                  sx={{
                    border: '1px solid',
                    borderColor: 'home.light'
                  }}
                >
                  <Table size={'normal'}>
                    <TableHead>
                      <NormalTableRow>
                        <NormalTableCell align={'center'}>
                          {'ردیف'}
                        </NormalTableCell>
                        <NormalTableCell align={'center'}>
                          {'نام'}
                        </NormalTableCell>
                        <NormalTableCell align={'center'}>
                          {'نام خانوادگی'}
                        </NormalTableCell>
                        <NormalTableCell align={'center'}>
                          {'عملیات'}
                        </NormalTableCell>
                      </NormalTableRow>
                    </TableHead>
                    <TableBody>
                      {searchedValue.length > 1
                        ? filteredUsers.map((row, index) => (
                            <NormalTableRow
                              key={row.id}
                              sx={{
                                '&:last-child td, &:last-child th': {
                                  border: 0,
                                },
                              }}
                            >
                              <NormalTableCell
                                align={'center'}
                                component={'th'}
                                scope={'row'}
                              >
                                {index + 1}
                              </NormalTableCell>
                              <NormalTableCell
                                align={'center'}
                                component={'th'}
                                scope={'row'}
                              >
                                {row.title}
                              </NormalTableCell>
                              <NormalTableCell
                                align={'center'}
                                component={'th'}
                                scope={'row'}
                              >
                                {`${row.title} ${row.title}`}
                              </NormalTableCell>
                              <NormalTableCell
                                align={'center'}
                                component={'th'}
                                scope={'row'}
                              >
                                {/* <Tooltip title={'حذف'}>
                                  <IconButton
                                    aria-label={'delete'}
                                    onClick={() => alert('delete')}
                                  >
                                    <Delete fontSize={'inherit'} />
                                  </IconButton>
                                </Tooltip> */}
                                <Tooltip title={'ویرایش'}>
                                  <IconButton
                                    aria-label={'edit'}
                                    onClick={() =>
                                      navigate(`../editUser/${row.id}`)
                                    }
                                  >
                                    <Edit fontSize={'inherit'} />
                                  </IconButton>
                                </Tooltip>
                              </NormalTableCell>
                            </NormalTableRow>
                          ))
                        : users.map((row, index) => (
                            <NormalTableRow
                              key={row.id}
                              sx={{
                                '&:last-child td, &:last-child th': {
                                  border: 0,
                                },
                              }}
                            >
                              <NormalTableCell
                                align={'center'}
                                component={'th'}
                                scope={'row'}
                              >
                                {index + 1}
                              </NormalTableCell>
                              <NormalTableCell
                                align={'center'}
                                component={'th'}
                                scope={'row'}
                              >
                                {row.title}
                              </NormalTableCell>
                              <NormalTableCell
                                align={'center'}
                                component={'th'}
                                scope={'row'}
                              >
                                {`${row.title} ${row.title}`}
                              </NormalTableCell>
                              <NormalTableCell
                                align={'center'}
                                component={'th'}
                                scope={'row'}
                              >
                                {/* <Tooltip title={'حذف'}>
                                  <IconButton
                                    aria-label={'delete'}
                                    onClick={() => alert('delete')}
                                  >
                                    <Delete fontSize={'inherit'} />
                                  </IconButton>
                                </Tooltip> */}
                                <Tooltip title={'ویرایش'}>
                                  <IconButton
                                    aria-label={'edit'}
                                    onClick={() =>
                                      navigate(`../editUser/${row.id}`)
                                    }
                                  >
                                    <Edit fontSize={'inherit'} />
                                  </IconButton>
                                </Tooltip>
                              </NormalTableCell>
                            </NormalTableRow>
                          ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              ) : (
                <Alert
                  variant={'outlined'}
                  severity={'info'}
                  sx={{ color: 'info.light' }}
                >
                  {'داده ای جهت نمایش موجود نمیباشد.'}
                </Alert>
              )}
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserList;
