# Hillink

Site estático de leitura. Barra lateral e conteúdo.

## Subir no Portainer

1. `just imagem` — gera `hillink-docs.tar.gz` (85 MB)
2. Portainer → **Images** → **Import** → enviar o arquivo
3. Portainer → **Stacks** → **Add stack** → **Web editor** → colar o
   `docker-compose.yml` deste projeto → **Deploy**

Fica em `http://<servidor>:8080`.

## Editar

```bash
just dev        # http://localhost:8080
just imagem     # gera o arquivo novo para o Portainer
```

Páginas em `docs/*.md`. Navegação em `mkdocs.yml`, seção `nav`.

## Arquivos

```
Dockerfile.site      constroi o site e serve com nginx
docker-compose.yml   stack do Portainer
mkdocs.yml           navegacao e extensoes
docs/                paginas e assets
overrides/           remove cabecalho, rodape e indice lateral
```

`docs/assets/enviados/` guarda material bruto de campo (vídeos, planilhas).
Fica fora da imagem por `.dockerignore` — são ~290 MB que nenhuma página usa.
