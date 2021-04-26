import React from 'react';
import {
  Card, CardHeader, Avatar, Typography, CardContent, SvgIcon,
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import { InlineIcon } from '@iconify/react';
import genderFemale from '@iconify-icons/mdi/gender-female';
import genderMale from '@iconify-icons/mdi/gender-male';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  highlight: {
    backgroundColor: '#FDFF7A',
  },
});

const Contact = ({ contact, highlight }) => {
  const {
    cell, email, gender, name, phone, picture,
  } = contact;

  const genderIcon = {
    male: genderMale,
    female: genderFemale,
  };

  const classes = useStyles();

  return (
    <Card raised className={highlight && classes.highlight}>
      <CardHeader
        avatar={
          <Avatar src={picture.thumbnail} alt={`${name.title} ${name.first} ${name.last}`} />
        }
        title={(
          <Typography variant="h5">
            {name.first}
            {' '}
            {name.last}
            {' '}
            <InlineIcon icon={genderIcon[gender]} />
          </Typography>
        )}
      />
      <CardContent>
        <Typography>
          <SvgIcon component={MailIcon} />
          {email}
        </Typography>
        <Typography>
          <SvgIcon component={PhoneIcon} />
          {phone}
        </Typography>
        <Typography>
          <SvgIcon component={PhoneIphoneIcon} />
          {cell}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Contact;
