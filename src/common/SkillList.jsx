import styles from "../sections/Skills/SkillsStyles.module.css"

function SkillList({src, skill}) {
  return (
    <span>
        <img src={src} alt="Checkmark icon" />
        <p>{skill}</p>
    </span>
  )
}

export default SkillList