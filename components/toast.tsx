import React from "react";
import ReactDOM from "react-dom";
import { SnackbarProvider, withSnackbar } from "notistack";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  success: function (msg: string) {
    this.toast(msg, "success");
  },
  error: function (msg: string) {
    this.toast(msg, "error");
  },
  warning: function (msg: string) {
    this.toast(msg, "warning");
  },

  toast: function (msg: string, variant: string) {
    const Display = withSnackbar(({ message, enqueueSnackbar }: any) => {
      enqueueSnackbar(message, { variant });
      return null;
    });
    const mountPoint = document.getElementById("snackbarhelper");
    ReactDOM.render(
      <SnackbarProvider maxSnack={3}>
        <Display message={msg} variant={variant} />
      </SnackbarProvider>,
      mountPoint
    );
  },
};
