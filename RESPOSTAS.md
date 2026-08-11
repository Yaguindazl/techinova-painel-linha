# Respostas do LAB 01

Nome: Yago Dias dos Santos
Dupla (M2 em diante): Mateus Alcantara da Silva

---

## M2 - Quem quebrou o painel

**Hash curto do commit que introduziu o erro:** 01ef93b

**Autor:** Tarcisio Melo

**Data:** 15/06/2026 às 22:38:00 (-03:00)

**Linha alterada (antes e depois):**

```
antes:

return (Leitura - 32) * 5 / 9;


depois:

return leitura * 9 / 5 + 32;
```

---

---

## M3 - O segredo vazado

**O que voce esperava ver no** **`git status`** **e o que apareceu:**

Eu esperava que o arquivo `config/credenciais.env` deixasse de aparecer no Git após ser adicionado ao `.gitignore`. Porém, o `git status` mostrou o arquivo `.gitignore` como untracked, enquanto o `config/credenciais.env` continuou sendo rastreado pelo Git.

**Depois do push, alguem que clonar o repositorio ainda consegue ler a chave?**
**Responda em duas linhas, explicando o motivo:**

Sim. Como o arquivo já fazia parte do histórico do Git, adicioná-lo ao `.gitignore` não remove os commits antigos. Além disso, o conteúdo continua disponível no histórico, então a credencial deve ser considerada comprometida e, na vida real, precisa ser rotacionada.

---

## M4 - Colisao

**O que significavam os marcadores que apareceram dentro do arquivo:**

- `<<<<<<<` : indica o início da versão que estava na branch atual (`main`).
- `=======` : separa as duas versões que entraram em conflito.
- `>>>>>>>` : indica o fim da versão que veio da branch que estava sendo mesclada (`painel-b`).

**Qual pedaco veio de quem, e qual titulo voces decidiram manter:**

A versão da `main` veio da Pessoa A (Yago), com o título `Painel da Linha 3 - Pessoa A`. A versão da `painel-b` veio da Pessoa B (Mateus), com o título `Painel da Linha 3 - Pessoa B`. Decidimos manter o título da Pessoa A: `Painel da Linha 3 - Pessoa A`.

---

## Casa - Incidente na linha 3

**Hash do commit que quebrou o painel:**

**Hash do commit de revert:**

**Por que** **`git revert`** **e nao** **`git reset`** **neste caso:**
