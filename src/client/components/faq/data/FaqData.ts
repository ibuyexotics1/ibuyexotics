export type FaqObj = {
    id: number;
    question: string;
    answer: string;
}

export const FaqData: FaqObj[] = [
    {
        id: 1,
        question: 'How do I sell my exotic vehicle?',
        answer: 'Complete the form. We will reach out to you with all the information you need to sell it.'
    },
    {
        id: 2,
        question: 'What if my exotic vehicle is being leased or financed?',
        answer: 'No problem! We buyout/payoff leased or financed exotic vehicles.'
    },
    {
        id: 3,
        question: 'How long will it take for my vehicle to be paid off if I’m leasing or financing it?',
        answer: 'We will reach out to your bank as soon as possible. We need the title as badly as you want to pay off the vehicle.'
    },
    {
        id: 4,
        question: 'Where are you located?',
        answer: 'We are located in Staten Island, New York.'
    },
    {
        id: 5,
        question: 'How can I contact you?',
        answer: 'Shoot us an email with your contact information and we will reach out to you. Email: i-buy-exotics1@gmail.com'
    },
]