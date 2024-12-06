import { ReviewService } from './review.service';
import { ReviewDto, ReviewListDto } from './dto/review.dto';
import { CreateReviewPayload } from './payload/create-review.payload';
import { ReviewQuery } from './query/review.query';
import { PutUpdateReviewPayload } from './payload/put-update-review.payload';
import { PatchUpdateReviewPayload } from './payload/patch-update-review.payload';
import { UserBaseInfo } from '../auth/type/user-base-info.type';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    createReview(payload: CreateReviewPayload, user: UserBaseInfo): Promise<ReviewDto>;
    getReviewById(reviewId: number): Promise<ReviewDto>;
    getReviews(query: ReviewQuery): Promise<ReviewListDto>;
    putUpdateReview(reviewId: number, payload: PutUpdateReviewPayload, user: UserBaseInfo): Promise<ReviewDto>;
    patchUpdateReview(reviewId: number, payload: PatchUpdateReviewPayload, user: UserBaseInfo): Promise<ReviewDto>;
    deleteReview(reviewId: number, user: UserBaseInfo): Promise<void>;
}
