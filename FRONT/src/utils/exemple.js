export const validatorSubmitContactRequest = (
  emailContact,
  nameContact,
  objectDemand,
  contentDemand,
) => {
  let valid = 0;
  const errors = {};

  const regMail = new RegExp('^[a-zA-Z0-9.-]+@[a-z]{1,}\.[a-z]{1,}$');
  const regName = new RegExp('^[a-zA-Z0-9\'. -]{1,}$');

  if (regMail.test(emailContact)) {
    valid += 1;
    errors.emailError = true;
  }
  else {
    errors.emailError = false;
  }

  if (regName.test(nameContact)) {
    valid += 1;
    errors.nameError = true;
  }
  else {
    errors.nameError = false;
  }

  if (objectDemand !== '' && objectDemand !== null) {
    valid += 1;
    errors.objectError = true;
  }
  else {
    errors.objectError = false;
  }

  if (contentDemand !== '' && contentDemand !== null) {
    valid += 1;
    errors.contentError = true;
  }
  else {
    errors.contentError = false;
  }

  if (valid === 4) {
    return {
      validate: true,
    };
  }

  return {
    validate: false,
    errors: errors,
  };
};

export const truc = () => {
  const rien = 1;
  return rien;
};
