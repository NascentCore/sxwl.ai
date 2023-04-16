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

if you want to renew or issue a ssl certificate, you can just execute command

```
sudo certbot --nginx
```

## issues new ceritifcation 
if you have a new domain
like `nascentcore.cn` and `www.nascentcore.cn`
1. add these line to `/etc/nginx/sites-available/default`
```
server {
    server_name www.nascentcore.cn;
    location / {
        proxy_pass http://127.0.0.1:3001;
    }

    listen 80; # managed by Certbot
}

server {
    server_name www.nascentcore.cn;
    location / {
        proxy_pass http://127.0.0.1:3001;
    }

    listen 80; # managed by Certbot
}
```
2. execute `certboot` to activate HTTPS, nginx conf will be auto reload.
```
sudo certbot --nginx
```

```
ubuntu@ip-172-31-88-51:/etc/nginx$ sudo certbot --nginx
Saving debug log to /var/log/letsencrypt/letsencrypt.log

Which names would you like to activate HTTPS for?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: nascentcore.com
2: nascentcore.ai
3: nascentcore.cn
4: www.nascentcore.ai
5: www.nascentcore.cn
6: www.nascentcore.com
7: tricorder.dev
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate numbers separated by commas and/or spaces, or leave input
blank to select all options shown (Enter 'c' to cancel): 3
Requesting a certificate for nascentcore.cn

Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/nascentcore.cn/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/nascentcore.cn/privkey.pem
This certificate expires on 2023-07-15.
These files will be updated when the certificate renews.
Certbot has set up a scheduled task to automatically renew this certificate in the background.

Deploying certificate
Successfully deployed certificate for nascentcore.cn to /etc/nginx/sites-enabled/default
Congratulations! You have successfully enabled HTTPS on https://nascentcore.cn

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
If you like Certbot, please consider supporting our work by:
 * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
 * Donating to EFF:                    https://eff.org/donate-le
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
ubuntu@ip-172-31-88-51:/etc/nginx$ sudo certbot --nginx
Saving debug log to /var/log/letsencrypt/letsencrypt.log

Which names would you like to activate HTTPS for?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: nascentcore.com
2: nascentcore.cn
3: nascentcore.ai
4: www.nascentcore.ai
5: www.nascentcore.com
6: www.nascentcore.cn
7: tricorder.dev
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate numbers separated by commas and/or spaces, or leave input
blank to select all options shown (Enter 'c' to cancel): 6
Requesting a certificate for www.nascentcore.cn

Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/www.nascentcore.cn/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/www.nascentcore.cn/privkey.pem
This certificate expires on 2023-07-15.
These files will be updated when the certificate renews.
Certbot has set up a scheduled task to automatically renew this certificate in the background.

Deploying certificate
Successfully deployed certificate for www.nascentcore.cn to /etc/nginx/sites-enabled/default
Congratulations! You have successfully enabled HTTPS on https://www.nascentcore.cn

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
If you like Certbot, please consider supporting our work by:
 * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
 * Donating to EFF:                    https://eff.org/donate-le
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
```
