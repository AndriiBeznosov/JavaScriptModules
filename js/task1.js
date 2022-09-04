function getRefs() {
  return {
    form: document.querySelector('.login-form'),
    contactList: document.querySelector('.contacts-list'),
  };
}
const refs = getRefs();
const contacts = [];
let contact = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFormInput);

function onFormSubmit(event) {
  event.preventDefault();
  contacts.push(contact);
  event.target.reset();
  console.log(contacts);
  contact = {};
  creadeAndRenderContactListMarcup(contacts);
}

function onFormInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
  contact[event.target.name] = event.target.value;
  console.log(contacts);
}
function creadeAndRenderContactListMarcup(contacts) {
  const marcup = contacts
    .map(
      ({ name, phoneNumber }) =>
        `<li>
        <span>Имя: ${name}</span>
        <span>Номер телефона: ${phoneNumber}</span>
      </li>`,
    )
    .join('');
  refs.contactList.innerHTML = marcup;
}
