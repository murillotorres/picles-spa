import { Button } from "../../../components/common/Button";
import { Input } from "../../../components/common/Input";
import { Panel } from "../../../components/layout/Panel";
import styles from './Shelter.module.css'

export function Shelter() {
    return (
        <Panel>
            <form>
                <input />
                <Input label="Nome" />
                <Button type="submit">Salvar dados</Button>
            </form>
            <Input label="Nome" />
        </Panel>
    )
}