import login from 'app-ui/containers/login/action-names';
import authentication from 'services/sessions/authentication/action-names'

const symbols = [
  ...login,
  ...authentication
].reduce((acc, eventName) => ({
    ...acc,
    [`${eventName}`]: acc[eventName] ? duplicateEventNameError(eventName) : Symbol.for(eventName)
}), {});

function duplicateEventNameError (eventName) {
    throw new Error(`Event ${eventName} already exists`);
}

export default symbols;

