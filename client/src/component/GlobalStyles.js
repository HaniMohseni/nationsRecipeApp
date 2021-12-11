import {createGlobalStyle} from "styled-components";


export default createGlobalStyle`
    
    
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&family=Lora:ital,wght@1,400;1,500;1,600&family=Poppins:ital,wght@0,400;1,500&family=Varela+Round&display=swap');

*{
    box-sizing: border-box;
}

:root{
    --primary-color: #351898;
    --black-color:#111;
    --secondary-color:#F7930A;
}

body{

    color: var(--black-color);
    font-family: 'poppins', sans-serif;
}
`;


