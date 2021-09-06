import styled from "styled-components";
/**
 * Documentation::
 *  #### USE ######
 *
 *  import {
 *      Element1,
 *      Element2
 *    } from "folder/location/Styled"
 *
 *   function Component(){
 *
 *      return(
 *
 *          <Element1>
 *              <h1> Hi! </h1>
 *          </Element1>
 *
 *          <Element2
 *              style={{
 *                  margin: values,
 *                  backgroundColor: "red",
 *              }}
 *              className=' element-1 '
 *          />
 *      )
 *   }
 *
 *    --ES6
 *
 *  const Component =()=> {
 *
 *      return(
 *
 *          <Button
 *              onClick={function}
 *          > Button label </Button>
 *      )
 * }
 */
export const Row = styled.div`
    display: flex;
`;
export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Input = styled.input`
    padding: 0.6rem 1rem;
    margin: 1rem 1rem;
    background-color: #2d2d2d;
    color: white;
    border-radius: 8px;
    border-style: none;
`;
export const SectionTitle = styled.h3`
    color: #ffb600;
    position: relative;
    display: inline;
    margin: 0.5rem 1rem;
    margin-bottom: 1.3rem;
    ::before {
        content: "";
        position: absolute;
        background-color: #ffb600;
        bottom: -0.2em;
        left: 50%;
        transform: translate(-50%);
        height: 1px;
        width: 80%;
    }
`;
export const Button = styled.button`
    padding: 0.7rem 2rem;
    border-radius: 4px;
    background-color: #ffb600;
    color: black;
    border-style: none;
    margin-top: 1rem;
    margin-bottom: 1rem;

    transition: background 0.8s;
    :hover {
        cursor: pointer;
        background-color: #a87c0a;
    }
`;
export const GhostButton = styled.button`
    margin: 0;
    padding: 0.8rem 1.5rem;
    border: solid 1px #2d2d2d;
    background-color: transparent;
    color: white;
    text-align: left;
    transition: all 0.8s;
    :hover {
        cursor: pointer;
        background-color: #313338;
    }
`;
export const Textarea = styled.textarea`
    padding: 1.3rem 3rem;
    // margin: 1rem 3rem;
    border-radius: 8px;
    border-style: none;
    outline: none;
    color: black;
    font-family: "Open Sans", sans-serif;
    font-size: 90%;
`;
export const Star = styled.div`
    width: 2rem;
    height: 2rem;
    clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
    );
    margin: 0.5rem 0.1rem;
    background-color: white;
`;
export const LinkButton = styled.div`
    background-color: transparent;
    margin: 0.1rem 0;
    border-style: none;
    outline: none;
    position: relative;
    :hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;
