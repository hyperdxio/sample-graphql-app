import { initSDK } from '@hyperdx/node-opentelemetry';

initSDK({
  consoleCapture: true, // optional, default: true
  additionalInstrumentations: [], // optional, default: []
});
