module.exports = ({ env }) => ({
    upload: {
      provider: 'google-cloud-storage',
      providerOptions: {
        bucketName: env('GCS_BUCKET_NAME'),
        publicFiles: true,
        uniform: false,
        basePath: '',
      },
    }
});