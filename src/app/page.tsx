import Image from "next/image";
import styles from "./page.module.css";
import { Button, Flex, Layout } from "antd";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    </main>
  );
}
