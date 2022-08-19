import Review, { ReviewAttrs } from '../../models/reviewModel'

const createReview = async (reviewAttrs: ReviewAttrs) => {
	// check that the person being reviewed is a personal trainer
	let review = new Review(reviewAttrs)
	review = await review.save()

	return review
}

export default createReview
