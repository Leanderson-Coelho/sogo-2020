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
import { useStyle } from './Style';

const HomeTeacher = () => {
  const classes = useStyle();
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
                  <Button variant="outlined" color="primary">
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
                  <Button variant="outlined" color="primary">
                    Cadastrar
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
