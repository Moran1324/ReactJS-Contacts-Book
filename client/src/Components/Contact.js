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
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles({
  highlight: {
    backgroundColor: '#FDFF7A',
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '0px',
  },
  avatar: {
    width: isMobile ? '72px' : '96px',
    height: isMobile ? '72px' : '96px',
    marginBottom: '8px',
  },
  cardContent: {
    color: 'gray',
    textAlign: 'left',
    alignItems: 'center',
    paddingTop: '0px',
  },
  contactDetail: {
    fontSize: '1.2rem',
    margin: '8px 0px',
  },
  contentIcon: {
    fontSize: '1rem',
    margin: '0px 8px',
  },
  contactName: {
    fontSize: '2rem',
    fontWeight: 'bolder',
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
    <Card raised className={highlight ? classes.highlight : null}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar} src={picture.thumbnail} alt={`${name.title} ${name.first} ${name.last}`} />
        }
        title={(
          <Typography className={classes.contactName} variant="h4">
            {name.first}
            {' '}
            {name.last}
            {' '}
            <InlineIcon icon={genderIcon[gender]} />
          </Typography>
        )}
        className={classes.cardHeader}
      />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.contactDetail}>
          <SvgIcon className={classes.contentIcon} component={MailIcon} />
          {email}
        </Typography>
        <Typography className={classes.contactDetail}>
          <SvgIcon className={classes.contentIcon} component={PhoneIcon} />
          {phone}
        </Typography>
        <Typography className={classes.contactDetail}>
          <SvgIcon className={classes.contentIcon} component={PhoneIphoneIcon} />
          {cell}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Contact;
