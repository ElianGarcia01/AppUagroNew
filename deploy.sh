#!/bin/bash

# Configuraciones
SERVER_USER="dgtidweb"                # Usuario del servidor remoto
SERVER_HOST="192.168.140.209" # IP o dominio del servidor
REMOTE_PATH="/var/www/html/AppUagroNew"         # Ruta donde se alojará el proyecto
LOCAL_BUILD_PATH="./dist"            # Carpeta local de React después de construir
BACKUP_PATH="/var/www/html/AppUagroEjemplo"          # Carpeta de backups en el servidor (opcional)

# Mensajes de log
echo "Iniciando el despliegue..."

# Paso 1: Construir el proyecto
echo "Construyendo el proyecto de React..."
npm run build || { echo "Error: Falló la construcción del proyecto"; exit 1; }

# Paso 2: Crear un backup en el servidor (opcional)
echo "Creando un backup del despliegue anterior..."
ssh $SERVER_USER@$SERVER_HOST "mkdir -p $BACKUP_PATH && cp -r $REMOTE_PATH $BACKUP_PATH/backup_$(date +%Y%m%d%H%M%S)" || {
  echo "Advertencia: No se pudo crear el backup. Continuando con el despliegue..."
}

# Paso 3: Subir los archivos al servidor
echo "Subiendo los nuevos archivos al servidor..."
scp -r $LOCAL_BUILD_PATH/* $SERVER_USER@$SERVER_HOST:$REMOTE_PATH || { 
  echo "Error: Falló la transferencia de archivos"; exit 1; 
}

# Paso 4: Configurar permisos
echo "Configurando permisos en el servidor..."
ssh $SERVER_USER@$SERVER_HOST "sudo chown -R www-data:www-data $REMOTE_PATH && sudo chmod -R 755 $REMOTE_PATH" || { 
  echo "Advertencia: No se pudieron configurar los permisos. Continuando..." 
}

# Paso 5: Reiniciar Apache (opcional)
echo "Reiniciando Apache en el servidor..."
ssh $SERVER_USER@$SERVER_HOST "sudo systemctl restart apache2" || { 
  echo "Error: Falló el reinicio de Apache"; exit 1; 
}

# Finalización
echo "Despliegue completado con éxito."
