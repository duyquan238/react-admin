import React, { Fragment, useState } from "react";
import { required, TextInput } from "react-admin";
import { IconContentAdd, IconCancel } from "@material-ui/icons";

import {
  Dialog,
  Button as MaterialButton,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";

const UserLanguageCreate = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSubmit = () => {};

  const handleSaveClick = () => {};

  return (
    <Fragment>
      {/* <Button onClick={handleOpenDialog} label="ra.action.create">
        <IconContentAdd />
      </Button> */}
      <MaterialButton variant="contained" onClick={handleOpenDialog}>
        Test
      </MaterialButton>
      <Dialog
        fullWidth
        open={openDialog}
        onClose={handleCloseDialog}
        aria-label="Create post"
      >
        <DialogTitle>Add Language</DialogTitle>
        <DialogContent>
          <TextInput source="phone" validate={required()} />
          {/* <SimpleForm
            // We override the redux-form name to avoid collision with the react-admin main form
            form="post-quick-create"
            resource="posts"
            // We override the redux-form onSubmit prop to handle the submission ourselves
            onSubmit={handleSubmit}
            // We want no toolbar at all as we have our modal actions
            toolbar={null}
          >
            <TextInput source="title" validate={required()} />
            <LongTextInput source="teaser" validate={required()} />
          </SimpleForm> */}
        </DialogContent>
        <DialogActions>
          {/* <SaveButton saving={isSubmitting} onClick={handleSaveClick} /> */}
          {/* <Button label="ra.action.cancel" onClick={handleCloseDialog}>
            <IconCancel />
          </Button> */}
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default UserLanguageCreate;
