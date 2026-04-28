// // старый метод

// // class Exampmle extends React.Component {
// //     componentDidMount() {
// //         console.log('Компонент смонтирован')
// //     }

// //     componentDidUpdate() {
// //         console.log('Компонент обновился')
// //     }

// //     componentWillUnmount() {
// //         console.log('Компонент удален')
// //     }

// //     render() {
// //         return <div>Привет, мир</div>
// //     }
// // }

// // современый метод

// import { useEffect } from 'react'

// const Example = () => {
//     useEffect( () => {
//         // побочный эффект
//     }, [/* зависимости */])

//     return <div>Привет, мир</div>
// }
// // этот хук помогает обработать код после того как компоненет отресовался или обновился
// // или сделать уборку после удаления    

// export default Example

