import { css } from 'lit-element';

export default css`
:host {
  display: inline-block;
  box-sizing: border-box; }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit;
  font-family: inherit; }

#conteiner, .fields {
  margin-left: 280px;
  margin-right: 280px;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; }

#conteiner {
  margin-top: 15rem; }

#noteuser, #notepassword {
  font-size: 12px;
  display: none;
  color: #00ACEA; }

#toast2 {
  --paper-toast-background-color: #00ACEA;
  --paper-toast-color: white; }
`;
