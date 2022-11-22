"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    port: 8000,
    dbUri: "mongodb+srv://AndyAshong:aVKp38AtSgELmgd@cluster0.gfe56iv.mongodb.net/?retryWrites=true&w=majority",
    saltWorkFactor: 10,
    accessTokenTtl:'15m',
    refreshTokenTtl: '1y',
    publicKey: 
`-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA0JRQJQralfxkjRi/xtQ2
OncNqIxxZRs778UrrsKdAkJW5QCQnNRbQ9cPUe8NcHCz3KMJQjuhuSD3pTs/Nn2P
2smeZJkYqH1HlrnQjhylI4I1OvCcpNaK+b66Tx3PVR/yVWs57wvFL1RoC2ltCyWq
OVojWpR6q3eWNv2bLcv1BvMKc3kL58e42ram1uoa4iXdSVRYMa/VCU81IHXCs3eR
nL6k7IxrSoSxPxzC1NsavCPg2CtSGqipiU6C+g5HZKW1QBRc9+vlxA3cZ6z0/riR
yvGqZ+P5OprBWX3pbzXDNKIxAFEjYis627xtvlZNUlItyQy5GaamGkAR0v9pKhL8
NlGZiY/4wCYn4CTavq0yrGiRq1NaEvUnnBbU0jrPkCfIVZqUe82bd6irr8uSAJCQ
kmyJP1ogYP2ls06wMvY4YcZoBBf8kaBA1DFWFDSAFI/NTWfOzvIxaVG9ZGoPoa2z
T2TKXgo2vO0YiB/Ngreezs4Eo34AMRlA8V+JUeoqe+9Hv4AB2m2pSdWitIKIzVa9
zk3AVoCAaIs+cDUx5ST0PajfNPqXrUIFq28pT6DniiPQ7nGyJSq+YHRhZ18qyp6/
/kD7HnV1zsaQvubXu65aTKzhG7w/wlDGJgcAfpE4PC7qBtlm8iWXj4WioKsngf2c
tkWyZuTIV0i9NFVa5lWKL2cCAwEAAQ==
-----END PUBLIC KEY-----`,
    privateKey: 
`-----BEGIN RSA PRIVATE KEY-----
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
-----END RSA PRIVATE KEY-----`
};
