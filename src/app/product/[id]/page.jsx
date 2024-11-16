"use client";

import Home_img from "@/component/Landing_Page/Home_image/home_image";

export default function ProductPage({ params }) {
    const { id } = params; // Retrieve the dynamic "id" parameter from the URL

    return (
        <div>
            {/* Pass the id to the Home_img component */}
            <Home_img productId={id} />
        </div>
    );
}
