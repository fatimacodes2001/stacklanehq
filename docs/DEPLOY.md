# Deploy stacklanehq.com

## Status

| Item | URL / status |
|------|----------------|
| GitHub repo | https://github.com/fatimacodes2001/stacklanehq |
| Vercel production | https://stacklanehq.vercel.app |
| Custom domain | Pending DNS in Cloudflare |

## Cloudflare DNS (required)

Domain DNS is on **Cloudflare** (`kim.ns.cloudflare.com`, `vin.ns.cloudflare.com`).

In **Cloudflare → stacklanehq.com → DNS → Records**:

1. Remove any existing `A` or `CNAME` records for `@` and `www` that conflict
2. Add these records (**Proxy status: DNS only / grey cloud**):

| Type  | Name | Content                              | Proxy    |
|-------|------|--------------------------------------|----------|
| CNAME | `@`  | `d7f39acab3bd9c3e.vercel-dns-017.com` | DNS only |
| CNAME | `www`| `cname.vercel-dns.com`               | DNS only |

Alternative (if you prefer A record at apex):

| Type  | Name | Content       | Proxy    |
|-------|------|---------------|----------|
| A     | `@`  | `76.76.21.21` | DNS only |
| CNAME | `www`| `cname.vercel-dns.com` | DNS only |

Newer Vercel IPs also valid: `216.198.79.1`, `64.29.17.1`

### Fastest option: Domain Connect

Open this link while logged into Cloudflare to apply DNS automatically:

https://vercel.com/api/v9/projects/prj_zQKWVQxZCQwc2Gq6z8HOlBb7K2KP/domains/stacklanehq.com/domain-connect/apply?teamId=team_f8OClEtMdqE9xFzbLWt2GtBs

Then verify:

```bash
vercel domains verify stacklanehq.com
```

SSL is issued by Vercel after DNS propagates (usually 5–30 minutes).

## Optional: professional email

Cloudflare → **Email → Email Routing**:

- `hello@stacklanehq.com` → `stacklaneorg@gmail.com`

## Redeploy

Git push to `main` auto-deploys via Vercel (GitHub connected).

Manual redeploy:

```bash
cd /Users/fatimatuzzehra2001/Projects/mlops-data-consulting
vercel deploy --prod --yes
```
