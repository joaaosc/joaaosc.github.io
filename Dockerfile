# =============================================================================
# Imagem do site. Parte da oficial do Material for MkDocs e acrescenta apenas
# os plugins usados no mkdocs.yml.
#
# Fixar a versao maior (9) evita que uma atualizacao do tema mude o visual do
# site sem aviso -- este projeto tem CSS proprio encaixado nas classes do tema.
# =============================================================================
FROM squidfunk/mkdocs-material:9

# git: exigido pelo plugin de data de revisao, que le o historico do repositorio
RUN apk add --no-cache git

COPY requirements.txt /tmp/requirements.txt
RUN pip install --no-cache-dir -r /tmp/requirements.txt

WORKDIR /docs
EXPOSE 8000
