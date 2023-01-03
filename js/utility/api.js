async function api(end_url, method, payload) {
    const response = await fetch("http://13.74.216.34/" + end_url, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      method: method,
      body: JSON.stringify(payload),
    });

    return await response.json();
  }