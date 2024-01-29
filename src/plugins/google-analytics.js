export default {
    setup: function (options) {
        const { trackingId } = options
        if (!trackingId) {
            throw new Error('Google Analytics trackingId is required')
        }
        console.log('App.vue mounted')
        const gScript = document.createElement('script')
        gScript.async = true
        gScript.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`
        document.head.appendChild(gScript)
        // Google tag (gtag.js)
        window.dataLayer = window.dataLayer || []
        function gtag () {
            window.dataLayer.push(arguments)
        }
        gtag('js', new Date())
        gtag('config', trackingId)
    }
}
