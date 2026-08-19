# Hillink — comandos

padrao:
    @just --list --unsorted

# Ver o site enquanto edita (http://localhost:8080)
dev:
    docker build -f Dockerfile.site -t hillink-docs:1 .
    -docker rm -f hillink-docs
    docker run -d --name hillink-docs -p 8080:8000 hillink-docs:1
    @echo "  http://localhost:8080"

# Parar
parar:
    -docker rm -f hillink-docs

# Gerar o arquivo para subir no Portainer
imagem:
    docker build -f Dockerfile.site -t hillink-docs:1 .
    docker save hillink-docs:1 | gzip -1 > hillink-docs.tar.gz
    @ls -lh hillink-docs.tar.gz | awk '{print "  hillink-docs.tar.gz  " $5}'
    @echo "  Portainer -> Images -> Import -> enviar este arquivo"

# Conferir se o site constroi
verificar:
    docker run --rm -v "$PWD":/docs squidfunk/mkdocs-material:9 build --strict --site-dir /tmp/v
