import styled from "styled-components";

export const TaskContainer = styled.div`
    background-color: #444;
	margin: 8px 0;
	padding: 15px 20px;
	display: flex;
	border-radius: 5px;
	justify-content: space-between;
	color: #eee;
	align-items: center;

    >h3 {
        cursor: pointer;
    }
`

export const ButtonContainer = styled.div`
    width: 30%;
	display: flex;
	justify-content: flex-end;
`

export const RemoveTaskButton = styled.button`
    background-color: #444;
	border: none;
	font-size: 24px;
	color: chartreuse;
	margin: 0 5px;
	cursor: pointer;
`