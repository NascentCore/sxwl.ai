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

Config location on server: `/etc/nginx/sites-available/nascentcore.ai`

Config file: [nginx.conf](nginx.conf).

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
