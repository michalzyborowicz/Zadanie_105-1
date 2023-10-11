const submitBtn = document.querySelector('.submit-button')
const formBody = document.querySelector('.form-body')
const popup = document.querySelector('.popup')
const popupBtn = document.querySelector('.popup-button')
const userInfo = document.querySelector('.user-info')
const form = document.forms.myForm
const nameInput = form.elements.name
const secondNameInput = form.elements.secondName
const genderInput = form.elements.gender
const loginInput = form.elements.login
const dateOfBirthInput = form.elements.dateOfBirth
const allInputs = document.querySelectorAll('input')
const fieldset = document.querySelector('fieldset')
const label = document.querySelector('label[for="dateOfBirth"]')
const warning = document.createElement('p')

submitBtn.addEventListener('click', e => {
	e.preventDefault()
	allInputs.forEach(input => {
		if (input.value === '' && input.type !== 'Date') {
			input.value = 'This field is required'
			input.style.color = 'red'
		} else if (genderInput.value === '') {
			fieldset.appendChild(warning)
			warning.textContent = 'You have to chose gender'
			warning.classList.add('warning')
		} else if (dateOfBirthInput.value === '') {
			label.appendChild(warning)
			warning.textContent = 'You have to chose date of birth'
			warning.style.color = 'red'
			warning.style.fontSize = '13px'
			input.style.color = 'red'
		} else {
			userInfo.textContent = `User ${nameInput.value} ${secondNameInput.value} born at ${dateOfBirthInput.value} is creating account with login: ${loginInput.value}`
			console.log('ok')
			formBody.classList.remove('active')
			popup.classList.add('active')
		}
		input.addEventListener('focus', () => {
			input.value = ''
			input.style.color = 'white'
			warning.remove()
		})
	})
})

popupBtn.addEventListener('click', () => {
	popup.classList.remove('active')
	formBody.classList.add('active')
	allInputs.forEach(input => {
		input.value = ''
	})
})
