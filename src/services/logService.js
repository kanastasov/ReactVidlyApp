import React, { Component } from 'react';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function init () {
    Sentry.init({
        dsn: "https://ad90ff9b7e3c49da9080b549361d8569@o453419.ingest.sentry.io/5442196",
        integrations: [
          new Integrations.BrowserTracing(),
        ],
        tracesSampleRate: 1.0,
      });
}

function log(error)  {
    <Sentry.ErrorBoundary fallback={"dddd"} />;

}

export default {
    init,
    log
};