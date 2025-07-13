

function AddAIProvider() {


    const onSubmit = () => {
        console.log('Submitted');
    }


    return (
        <div>
            <h1>Add AI Provider</h1>
            <AddProviderForm onSubmit={onSubmit} />
        </div>
    );
}

export default AddAIProvider;