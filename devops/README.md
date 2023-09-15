# DevOps

Docs for maitanining and operating the nascentcore.ai website.

## DNS Record

| Type  | Host                | Value           |
| ----- | ------------------- | --------------- |
| CNAME | nascentcore.ai      | nascentcore.com |
| CNAME | www.nascentcore.ai  | nascentcore.com |
| A     | nascentcore.com     | 3.219.32.128    |
| A     | www.nascentcore.com | 3.219.32.128    |
| A     | nascentcore.cn      | 3.219.32.128    |
| A     | www.nascentcore.cn  | 3.219.32.128    |

## Nginx Config

config location: `/etc/nginx/sites-available/nasencore.ai`

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
    server_name www.nascentcore.cn;
    location / {
        proxy_pass http://127.0.0.1:3001;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/www.nascentcore.cn/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/www.nascentcore.cn/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

server {
    server_name nascentcore.cn;
    location / {
        proxy_pass http://127.0.0.1:3001;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/nascentcore.cn/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/nascentcore.cn/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

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
    if ($host = nascentcore.cn) {
        return 301 https://$host$request_uri;
    }
    if ($host = www.nascentcore.cn) {
        return 301 https://$host$request_uri;
    }

    listen 80;
    return 404; # managed by Certbot
}
```

## SSL

Certbot uses [letsencrypt](https://letsencrypt.org/) to provide the root certificate,
and request certificates from letsencrypt.

* Setup domain name resolution to host IP
* Setup HTTP server on the specified IP
* Certbot insert `include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot` to
  nginx config, to prove the ownership of the IP and domain name to lets encrypt
* Letsencrypt then issues certificate to certbot
* Certbot then inserts configs to nginx config
  ```
  ssl_certificate /etc/letsencrypt/live/nascentcore.cn/fullchain.pem; # managed by Certbot
  ssl_certificate_key /etc/letsencrypt/live/nascentcore.cn/privkey.pem; # managed by Certbot
  ```

To invoke certbot to renew certificat:
```
sudo certbot --nginx
```

## Issue new ceritifcate

To add a new domain to nginx, for example `nascentcore.cn`, find the config file
located under `/etc/nginx/sites-available/default`, add configuration to start the
http service for the added domain:

```
server {
    server_name www.nascentcore.cn;
    location / {
        proxy_pass http://127.0.0.1:3001;
    }

    listen 80; # managed by Certbot
}
```

Then start certbot, certbot will then automatically repeat the above process to get new
certificate for this new domain `nascencore.cn`:
```
sudo certbot --nginx
```
