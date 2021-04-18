module.exports = ({ env }) => ({
    upload: {
      provider: 'google-cloud-storage',
      providerOptions: {
        bucketName: 'ondrejpolachcz.appspot.com',
        publicFiles: true,
        uniform: false,
        basePath: '',
      },
    }
});