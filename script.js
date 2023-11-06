//Views
const ratingView = document.querySelector('.rating-request')
const resultView = document.querySelector('.thank-you')

//Rating Buttons
const ratingOne = document.querySelector('#ratingone')
const ratingTwo = document.querySelector('#ratingtwo')
const ratingThree = document.querySelector('#ratingthree')
const ratingFour = document.querySelector('#ratingfour')
const ratingFive = document.querySelector('#ratingfive')

//Selected Rating
let selectedRating

//Submit Button
const submit = document.querySelector('#submit')

//Thank you Rating Component
const resultRating = document.querySelector('.given-rating')

ratingOne.addEventListener('click', () => {
    selectedRating = 1
    ratingOne.setAttribute('data-selected', 'true')
    ratingTwo.setAttribute('data-selected', 'false')
    ratingThree.setAttribute('data-selected', 'false')
    ratingFour.setAttribute('data-selected', 'false')
    ratingFive.setAttribute('data-selected', 'false')
})
ratingTwo.addEventListener('click', () => {
    selectedRating = 2
    ratingOne.setAttribute('data-selected', 'false')
    ratingTwo.setAttribute('data-selected', 'true')
    ratingThree.setAttribute('data-selected', 'false')
    ratingFour.setAttribute('data-selected', 'false')
    ratingFive.setAttribute('data-selected', 'false')
})
ratingThree.addEventListener('click', () => {
    selectedRating = 3
    ratingOne.setAttribute('data-selected', 'false')
    ratingTwo.setAttribute('data-selected', 'false')
    ratingThree.setAttribute('data-selected', 'true')
    ratingFour.setAttribute('data-selected', 'false')
    ratingFive.setAttribute('data-selected', 'false')
})
ratingFour.addEventListener('click', () => {
    selectedRating = 4
    ratingOne.setAttribute('data-selected', 'false')
    ratingTwo.setAttribute('data-selected', 'false')
    ratingThree.setAttribute('data-selected', 'false')
    ratingFour.setAttribute('data-selected', 'true')
    ratingFive.setAttribute('data-selected', 'false')
})
ratingFive.addEventListener('click', () => {
    selectedRating = 5
    ratingOne.setAttribute('data-selected', 'false')
    ratingTwo.setAttribute('data-selected', 'false')
    ratingThree.setAttribute('data-selected', 'false')
    ratingFour.setAttribute('data-selected', 'false')
    ratingFive.setAttribute('data-selected', 'true')
})

submit.addEventListener('click', () => {
    if (selectedRating != null) {
        resultRating.textContent = selectedRating.toString()
        ratingView.setAttribute('data-show', 'false')
        resultView.setAttribute('data-show', 'true')
    }
})


