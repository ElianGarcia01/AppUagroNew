#!/bin/bash

# Configuración
SERVER_USER="dgtidweb"
SERVER_IP="192.168.140.209"
SERVER_DIR="/var/www/hmtl"
LOCAL_DIR="./dist"

# Subir los archivos
echo "Subiendo archivos al servidor..."
rsync -avz --exclude=".git" $LOCAL_DIR $SERVER_USER@$SERVER_IP:$SERVER_DIR

# Ejecutar comandos en el servidor
echo "Ejecutando comandos en el servidor..."
ssh $SERVER_USER@$SERVER_IP << EOF
  cd $SERVER_DIR
  echo "Actualizando dependencias..."
  npm install # Si es un proyecto Node.js
  echo "Reiniciando servidor..."
  pm2 restart all # Usa tu herramienta para gestionar procesos (pm2, systemd, etc.)
EOF

echo "Despliegue completado con éxito."
