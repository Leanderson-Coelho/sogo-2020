import React from 'react';
import {
  Grid,
  Paper,
  Button,
  Container,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  CardActions,
} from '@material-ui/core';
import { NoteAdd, FindInPage } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useStyle } from './Style';

const ACTION_TYPE = 'CADASTRAR';

const HomeTeacher = () => {
  const classes = useStyle();
  const history = useHistory();

  function handleAction(action) {
    if (action === ACTION_TYPE) {
      history.push('/teacher/register');
    } else {
      history.push('/teacher/list');
    }
  }

  return (
    <div className={classes.content}>
      <Container className={classes.container}>
        <Paper className={classes.paper} elevation={6}>
          <Grid className={classes.containerCards} container>
            <Grid className={classes.gridCard} item xs={12} md={4}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar className={classes.avatar}>
                      <NoteAdd />
                    </Avatar>
                  }
                />
                <CardContent>Adicione um novo professor ao grupo!</CardContent>
                <CardActions>
                  <Button
                    onClick={() => handleAction('CADASTRAR')}
                    variant="outlined"
                    color="primary"
                  >
                    Cadastrar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid className={classes.gridCard} item xs={12} md={4}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar className={classes.avatar}>
                      <FindInPage />
                    </Avatar>
                  }
                />
                <CardContent>
                  Visualizar os professores já cadastrados!
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => handleAction('LISTAR')}
                    variant="outlined"
                    color="primary"
                  >
                    Visualizar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default HomeTeacher;
