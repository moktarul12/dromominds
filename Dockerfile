FROM php:8.2-apache

WORKDIR /var/www/html
COPY . /var/www/html/

RUN a2enmod rewrite \
    && sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf \
    && chown -R www-data:www-data /var/www/html

EXPOSE 80
