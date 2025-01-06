export default function MyButton({ readMoreButton }) {
    function handelReadMoreClick(e) {
        console.log('test');
    }

    return (
        <div>
            <button onClick={handelReadMoreClick}>{ readMoreButton }</button>
        </div>
    )
}