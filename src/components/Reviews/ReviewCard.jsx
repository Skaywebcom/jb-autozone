import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../Reviews/ReviewCard.css';
import { Pagination } from 'swiper/modules';
import ReviewsCardDetails from './ReviewsCardDetails';

// import your reviewer images
import user1 from "../Reviews/user1.png";
import user2 from "../Reviews/user2.png";
import user3 from "../Reviews/user3.png";

export default function ReviewCard() {
  return (
    <div className='flex flex-col justify-center items-center w-[100rem] pb-10 max-lg:w-[80rem] max-md:w-[70rem] max-[660px]:w-[60rem] h-full'>
      <Swiper 
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper min-h-[50vh] max-md:h-[30vh] overflow-hidden max-[550px]:w-[50rem] h-full"
      >
        <SwiperSlide>
          <ReviewsCardDetails 
            text="Booking was quick and straightforward, and the car was ready on time in excellent condition. The entire process felt professional and stress-free."
            name="Michael R."
            role="Business Traveler"
            image={user1}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ReviewsCardDetails 
            text="I appreciated the multiple pickup locations, which made my trip much easier. The vehicle was clean, well-maintained, and the staff were very accommodating."
            name="Samantha L."
            role="Frequent Renter"
            image={user2}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ReviewsCardDetails 
            text="What stood out for me was the clear pricing—no surprise charges at all. Excellent value for money and I will definitely use this service again."
            name="David K."
            role="Family Trip"
            image={user3}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
