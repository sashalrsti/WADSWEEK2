import admin from 'firebase-admin';

if(!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: "wadsweek2-nextjs-81192",
            clientEmail: "ksdjfdkn",
            privateKey: "sdjfskdn",

        })
    })
}

export const adminAuth = admin.auth();