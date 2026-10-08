# Cadastro Pessoal

Página web simples para cadastrar pessoas e listar os cadastros realizados. Os dados ficam salvos no próprio navegador.

## Funcionamento

1. O usuário preenche o formulário: nome, endereço, telefone, email, nacionalidade e naturalidade.
2. Opcionalmente escolhe uma foto, que aparece em pré-visualização assim que é selecionada.
3. Ao clicar em **Cadastrar**, os dados são salvos no `localStorage` do navegador.
4. Os cadastros aparecem na lista abaixo do formulário, com a foto e o botão **Excluir**.
5. Ao reabrir a página, os cadastros salvos continuam sendo exibidos.
6. O botão **Limpar** apaga os campos do formulário.

## Estrutura de arquivos

| Arquivo | Função |
|---|---|
| `index.html` | Estrutura da página e formulário |
| `style.css` | Aparência e layout |
| `script.js` | Lógica: salvar, listar, excluir e pré-visualizar a foto |

## Tecnologias

- HTML5
- CSS3
- JavaScript (`localStorage` e `FileReader`)

## Como executar

Baixe o projeto e abra o arquivo `index.html` no navegador. Não precisa instalar nada.

## Observação

As fotos são guardadas em base64 no `localStorage`, que tem limite de cerca de 5 MB. Fotos muito grandes podem enchê-lo.
