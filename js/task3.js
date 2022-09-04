const form = document.querySelector('.js-form__register');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  console.log(formData);
  formData.forEach((value, name) => {
    console.log('onFormSubmit - > name', name);
    console.log('onFormSubmit - > value', value);
  });
  //   const formElements = event.currentTarget.elements;
  //   console.log(formElements);
  //   const email = formElements.email.value;
  //   const password = formElements.password.value;
  //   const subscription = formElements.subscription.value;
  //   //   console.log(`email: ${email}`);
  //   //   console.log(`password: ${password}`);
  //   //     console.log(`value: ${subscription}`);
  //   const formData = {
  //     email,
  //     password,
  //     subscription,
  //   };
  //   console.log(formData);
}
