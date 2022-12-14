import { useParams } from "react-router-dom";
import Posts from "../Posts/Posts";
import styled from "styled-components";
import Trending from "./Trending";
import { getHashtagPost } from "../Service/api";

export default function HashtagPage() {
    const { hashtag } = useParams();
    return (
        <Wrapper>
            <Page>
                <Title>
                    <h1># {hashtag}</h1>
                </Title>
                <Posts func={getHashtagPost} param={hashtag} />
            </Page>
            <Trending />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Page = styled.div`
    width: 40vw;
    max-width: 611px;
    margin-right: 25px;
    margin-top: 125px;

    @media only screen and (max-width: 1023px) and (min-width: 768px) {
        width: 60vw;
    }

    @media only screen and (max-width: 767px) {
        margin-right: 0;
        width: inherit;
    }
`;

const Title = styled.div`
    display: flex;
    img {
        width: 53px;
        height: 53px;
        border-radius: 50%;
        margin-right: 17px;
    }
    h1 {
        font-family: "Oswald", sans-serif;
        font-size: 43px;
        font-weight: 700;
        color: var(--heavy-text);
        margin-bottom: 27px;
        @media only screen and (max-width: 767px) {
            margin-left: 17px;
        }
    }
`;
