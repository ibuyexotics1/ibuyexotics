import { useState } from "react"
import { FaqSectionContainer, FaqContentWrapper, FaqContainer, FaqQuestionContainer, FaqQuestion, FaqDownArrow, FaqAnswerContainer, FaqAnswer, FaqTitle } from "../../utils/styles/faq/FaqStyled"
import { FaqData, FaqObj } from "./data/FaqData"
import { faqVariants } from "../../utils/variants"
import { easeInOut } from "framer-motion"

type arrType = {
    [id: number]: boolean
}

export const Faq = () => {
    const [isOpen, setOpen] = useState<arrType>({});

    const handleFaq = (id: number) => {
        setOpen(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <FaqSectionContainer>
            <FaqContentWrapper>
                <FaqTitle>Frequently asked questions</FaqTitle>
                {FaqData.map((item: FaqObj) => (
                    <FaqContainer key={item.id} onClick={() => handleFaq(item.id)}>
                        <FaqQuestionContainer
                            className={isOpen[item.id] ? 'active' : 'inactive'}
                        >
                            <FaqQuestion>{item.question}: {item.id}</FaqQuestion>
                            <FaqDownArrow className={isOpen[item.id] ? 'active' : 'inactive'} />
                        </FaqQuestionContainer>

                        <FaqAnswerContainer
                            initial={{ height: '0px' }}
                            variants={faqVariants}
                            animate={isOpen[item.id] ? 'open' : 'closed'}
                            transition={{ duration: 0.3, ease: easeInOut }}
                        >
                            <FaqAnswer>{item.answer}: {item.id}</FaqAnswer>
                        </FaqAnswerContainer>
                    </FaqContainer>
                ))}
            </FaqContentWrapper>
        </FaqSectionContainer>
    )
}