# DevOps

Docs for maitanining and operating the nascentcore.ai website.

## DNS Record

| Type  | Host                | Value           |
| ----- | ------------------- | --------------- |
| CNAME | nascentcore.ai      | nascentcore.com |
| CNAME | www.nascentcore.ai  | nascentcore.com |
| A     | nascentcore.com     | 3.219.32.128    |
| A     | www.nascentcore.com | 3.219.32.128    |

## Nginx Config

config location: `/etc/nginx/sites-available/default`

config content:

```
server {
    server_name tricorder.dev;
    location / {
        proxy_pass http://127.0.0.1:3000;
    }


    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/tricorder.dev/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/tricorder.dev/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

server {
    server_name nascentcore.com;
    location / {
        proxy_pass http://127.0.0.1:3001;
    }
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/nascentcore.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/nascentcore.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}


server {
    server_name www.nascentcore.com;
    location / {
        proxy_pass http://127.0.0.1:3001;
    }
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/www.nascentcore.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/www.nascentcore.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}



server {
    server_name nascentcore.ai;
    location / {
        proxy_pass http://127.0.0.1:3001;
    }

    listen 443 ssl; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

    ssl_certificate /etc/letsencrypt/live/nascentcore.ai/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/nascentcore.ai/privkey.pem; # managed by Certbot
}

server {
    server_name www.nascentcore.ai;
    location / {
        proxy_pass http://127.0.0.1:3001;
    }

    listen 443 ssl; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

    ssl_certificate /etc/letsencrypt/live/www.nascentcore.ai/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/www.nascentcore.ai/privkey.pem; # managed by Certbot
}
server {
    if ($host = tricorder.dev) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    if ($host = nascentcore.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    if ($host = www.nascentcore.com) {
        return 301 https://$host$request_uri;
    }

    if ($host = nascentcore.ai) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    if ($host = www.nascentcore.ai) {
        return 301 https://$host$request_uri;
    }
    listen 80;
    return 404; # managed by Certbot
}
```

## SSL

if you want to renew or issue a ssl certificate, you can just execute command

```
sudo certbot --nginx
```
